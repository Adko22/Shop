using Core.Enitities.OrderAggregate;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Core.Specifications
{
    public class OrderByPaymentIntentIdSpecification : BaseSpecification<Order>
    {
        public OrderByPaymentIntentIdSpecification(string paymentItentId) 
            : base(o=>o.PaymentIntentId==paymentItentId)
        {
        }
    }
}
