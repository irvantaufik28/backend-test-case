const { Member } = require('../models');

class MemberRepository {
  constructor() {
    this._MemberModel = Member;
  }

  async getAllMember(filter) {
    const result = await this._MemberModel.findAll(filter);
    return result;
  }

  async getMemberById(id) {
    const result = await this._MemberModel.findOne({
      where: {
        id,
      },
    });
    return result;
  }

  async getMemberByCode(code) {
    const result = await this._MemberModel.findOne({
      where: {
        code,
      },
    });
    return result;
  }
}

module.exports = MemberRepository;
