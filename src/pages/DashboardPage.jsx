import {useLogOutRedirect} from 'hooks/useLogOutRedirect'

export const DashboardPage = () => {
  useLogOutRedirect();

  return <div>Dashboard page</div>;
};
