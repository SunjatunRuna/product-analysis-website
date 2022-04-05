import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='container border border-mute text-secondary ps-3 text-start'>
                <h6 className='fw-bold pt-3'>What is Context API?</h6>
                <p>Context api হচ্ছে রিয়েক্টের স্ট্রাকচার।
                    এটি এমন একটি উপায় যাতে কোনো রকম props পাস না করে উপাদানগুলোর মধ্যে মান সরবরাহ করা
                    যায়। এটি react app এ গ্লোবাল ভেরিয়েবল তৈরীর একটি কার্যকরী উপায়।
                    এর মাধ্যমে সহজে ডাটা আদান প্রদান করা যায়।
                    Application এর প্রতিটা স্তর থেকেই প্রপস ড্রিলিং সমাধানে সহয়তা করে।</p>
            </div>
        </div>
    );
};

export default Blogs;