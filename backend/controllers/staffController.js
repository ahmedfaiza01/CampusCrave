import staffModel from "../modals/staffModel.js";

// ✅ Create Staff
export const createStaff = async (req, res, next) => {
  try {
    const { name, role, phone, email, salary } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

    const newStaff = new staffModel({
      name,
      role,
      phone,
      email,
      salary,
      imageUrl
    });

    const saved = await newStaff.save();
    res.status(201).json(saved);
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ message: 'Email already exists' });
    } else next(err);
  }
};

// ✅ Get All Staff
export const getStaff = async (req, res, next) => {
  try {
    const staff = await staffModel.find().sort({ createdAt: -1 });
    const host = `${req.protocol}://${req.get('host')}`;
    const withFullUrl = staff.map(s => ({
      ...s.toObject(),
      imageUrl: s.imageUrl ? host + s.imageUrl : ''
    }));
    res.json(withFullUrl);
  } catch (err) {
    next(err);
  }
};

// ✅ Update Staff
export const updateStaff = async (req, res, next) => {
  try {
    const updated = await staffModel.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// ✅ Delete Staff
export const deleteStaff = async (req, res, next) => {
  try {
    const removed = await staffModel.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: "Staff not found" });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
