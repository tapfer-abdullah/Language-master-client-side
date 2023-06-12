import React, { useContext } from 'react';
import { AuthContext } from '../../Pages/AuthPage/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const {user} = useContext(AuthContext);

    const { isLoading, data: cart, refetch } = useQuery({
        queryKey: ["repoData"],
        queryFn: () =>
          fetch(`http://localhost:5000/my-selected-course?email=${user?.email}&status=unpaid`).then((res) =>
            res.json()
          ),
          enabled: !!user,
      })

      return [cart, refetch, isLoading];

    }

    

export default useCart;