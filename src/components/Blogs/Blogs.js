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
            <div className='container border border-mute text-secondary ps-3 my-4 text-start'>
                <h6 className='fw-bold pt-3'>What is Semantic tag? </h6>
                <p>Semantic tag উপাদানের উদ্দেশ্য নির্ধারণ করে। 
                    এর উপাদানগুলো মানুষ ও মেশিন যাতে সহজে বুঝতে পারে তা  স্পষ্টভাবে বণর্না করা৷ 
                    এটি ব্রাউজারে বিষয়বস্তুর অর্থ বুঝাতে সাহায্য করে। এটি অতিরিক্ত স্তরের স্পষ্টতা প্রদান করে। 
                    Semantic tag প্রয়োজনীয় তথ্য দ্রুত বের করতে সহয়তা করে।</p>
            </div>
        </div>
    );
};

export default Blogs;