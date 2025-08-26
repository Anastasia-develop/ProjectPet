import type { IUserType } from '../../../entities/user/model/user-type';
import userIcon from '../../../shared/assets/images/user-icon.svg';

export const Profile = (user: IUserType) => {
  return (
    <div style={{ display: 'flex' }}>
      <img src={userIcon} />
      <p
        style={{
          fontFamily: 'Inter-SemiBold',
          fontSize: '12px',
          paddingLeft: '8px',
        }}
      >{`${user.firstName} ${user.secondName}`}</p>
    </div>
  );
};
