# Kataw parser test case

## Input

`````js
a ||= b;

a &&= "foo";
b ||= "foo";
c ??= "foo";

d &&= 42;
e ||= 42;
f ??= 42;

a.baz &&= result.baz;
b.baz ||= result.baz;
c.baz ??= result.baz;

a.foo["baz"] &&= result.foo.baz;
b.foo["baz"] ||= result.foo.baz;
c.foo["baz"] ??= result.foo.baz;

a.foo.bar().baz &&= result.foo.bar().baz;
b.foo.bar().baz ||= result.foo.bar().baz;
b.baz ||= result.baz;
c.baz ??= result.baz;

(results ||= []).push(100);
(results &&= []).push(100);
(results ??= []).push(100);

if ((thing &&= thing.original)) {
}
if ((thing &&= defaultValue)) {
}
if ((thing ||= defaultValue)) {
}
if ((thing ??= defaultValue)) {
}

f ||= (a) => a;
f &&= (a) => a;
f ??= (a) => a;

f ||= (f.toString(), (a) => a);
f &&= (f.toString(), (a) => a);
f ??= (f.toString(), (a) => a);

(results ||= results1 ||= []).push(100);
(results &&= results1 &&= []).push(100);
(results ??= results1 ??= []).push(100);

obj[incr()] ||= incr();
oobj["obj"][incr()] ||= incr();
obj[incr()] &&= incr();
oobj["obj"][incr()] &&= incr();
obj[incr()] ??= incr();
oobj["obj"][incr()] ??= incr();
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4138,
                    "flags": 96,
                    "start": 1,
                    "end": 5
                },
                "right": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "flags": 32,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 8,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 4139,
                    "flags": 96,
                    "start": 11,
                    "end": 15
                },
                "right": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "\"foo\"",
                    "flags": 96,
                    "start": 15,
                    "end": 21
                },
                "flags": 32,
                "start": 8,
                "end": 21
            },
            "flags": 16,
            "start": 8,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 97,
                    "start": 22,
                    "end": 24
                },
                "operatorToken": {
                    "kind": 4138,
                    "flags": 96,
                    "start": 24,
                    "end": 28
                },
                "right": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "\"foo\"",
                    "flags": 96,
                    "start": 28,
                    "end": 34
                },
                "flags": 32,
                "start": 22,
                "end": 34
            },
            "flags": 16,
            "start": 22,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 97,
                    "start": 35,
                    "end": 37
                },
                "operatorToken": {
                    "kind": 4140,
                    "flags": 96,
                    "start": 37,
                    "end": 41
                },
                "right": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "\"foo\"",
                    "flags": 96,
                    "start": 41,
                    "end": 47
                },
                "flags": 32,
                "start": 35,
                "end": 47
            },
            "flags": 16,
            "start": 35,
            "end": 48
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 97,
                    "start": 48,
                    "end": 51
                },
                "operatorToken": {
                    "kind": 4139,
                    "flags": 96,
                    "start": 51,
                    "end": 55
                },
                "right": {
                    "kind": 201392130,
                    "text": 42,
                    "rawText": "42",
                    "flags": 96,
                    "start": 55,
                    "end": 58
                },
                "flags": 32,
                "start": 48,
                "end": 58
            },
            "flags": 16,
            "start": 48,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 97,
                    "start": 59,
                    "end": 61
                },
                "operatorToken": {
                    "kind": 4138,
                    "flags": 96,
                    "start": 61,
                    "end": 65
                },
                "right": {
                    "kind": 201392130,
                    "text": 42,
                    "rawText": "42",
                    "flags": 96,
                    "start": 65,
                    "end": 68
                },
                "flags": 32,
                "start": 59,
                "end": 68
            },
            "flags": 16,
            "start": 59,
            "end": 69
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 97,
                    "start": 69,
                    "end": 71
                },
                "operatorToken": {
                    "kind": 4140,
                    "flags": 96,
                    "start": 71,
                    "end": 75
                },
                "right": {
                    "kind": 201392130,
                    "text": 42,
                    "rawText": "42",
                    "flags": 96,
                    "start": 75,
                    "end": 78
                },
                "flags": 32,
                "start": 69,
                "end": 78
            },
            "flags": 16,
            "start": 69,
            "end": 79
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 97,
                        "start": 79,
                        "end": 82
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 83,
                        "end": 86
                    },
                    "flags": 97,
                    "start": 79,
                    "end": 86
                },
                "operatorToken": {
                    "kind": 4139,
                    "flags": 96,
                    "start": 86,
                    "end": 90
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "result",
                        "rawText": "result",
                        "flags": 96,
                        "start": 90,
                        "end": 97
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 98,
                        "end": 101
                    },
                    "flags": 96,
                    "start": 90,
                    "end": 101
                },
                "flags": 32,
                "start": 79,
                "end": 101
            },
            "flags": 16,
            "start": 79,
            "end": 102
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 97,
                        "start": 102,
                        "end": 104
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 105,
                        "end": 108
                    },
                    "flags": 97,
                    "start": 102,
                    "end": 108
                },
                "operatorToken": {
                    "kind": 4138,
                    "flags": 96,
                    "start": 108,
                    "end": 112
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "result",
                        "rawText": "result",
                        "flags": 96,
                        "start": 112,
                        "end": 119
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 120,
                        "end": 123
                    },
                    "flags": 96,
                    "start": 112,
                    "end": 123
                },
                "flags": 32,
                "start": 102,
                "end": 123
            },
            "flags": 16,
            "start": 102,
            "end": 124
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 97,
                        "start": 124,
                        "end": 126
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 127,
                        "end": 130
                    },
                    "flags": 97,
                    "start": 124,
                    "end": 130
                },
                "operatorToken": {
                    "kind": 4140,
                    "flags": 96,
                    "start": 130,
                    "end": 134
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "result",
                        "rawText": "result",
                        "flags": 96,
                        "start": 134,
                        "end": 141
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 142,
                        "end": 145
                    },
                    "flags": 96,
                    "start": 134,
                    "end": 145
                },
                "flags": 32,
                "start": 124,
                "end": 145
            },
            "flags": 16,
            "start": 124,
            "end": 146
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 97,
                            "start": 146,
                            "end": 149
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 150,
                            "end": 153
                        },
                        "flags": 97,
                        "start": 146,
                        "end": 153
                    },
                    "expression": {
                        "kind": 201392131,
                        "text": "baz",
                        "rawText": "\"baz\"",
                        "flags": 96,
                        "start": 154,
                        "end": 159
                    },
                    "flags": 536870944,
                    "start": 146,
                    "end": 160
                },
                "operatorToken": {
                    "kind": 4139,
                    "flags": 96,
                    "start": 160,
                    "end": 164
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "result",
                            "rawText": "result",
                            "flags": 96,
                            "start": 164,
                            "end": 171
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 172,
                            "end": 175
                        },
                        "flags": 96,
                        "start": 164,
                        "end": 175
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 176,
                        "end": 179
                    },
                    "flags": 96,
                    "start": 164,
                    "end": 179
                },
                "flags": 32,
                "start": 146,
                "end": 179
            },
            "flags": 16,
            "start": 146,
            "end": 180
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 97,
                            "start": 180,
                            "end": 182
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 183,
                            "end": 186
                        },
                        "flags": 97,
                        "start": 180,
                        "end": 186
                    },
                    "expression": {
                        "kind": 201392131,
                        "text": "baz",
                        "rawText": "\"baz\"",
                        "flags": 96,
                        "start": 187,
                        "end": 192
                    },
                    "flags": 536870944,
                    "start": 180,
                    "end": 193
                },
                "operatorToken": {
                    "kind": 4138,
                    "flags": 96,
                    "start": 193,
                    "end": 197
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "result",
                            "rawText": "result",
                            "flags": 96,
                            "start": 197,
                            "end": 204
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 205,
                            "end": 208
                        },
                        "flags": 96,
                        "start": 197,
                        "end": 208
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 209,
                        "end": 212
                    },
                    "flags": 96,
                    "start": 197,
                    "end": 212
                },
                "flags": 32,
                "start": 180,
                "end": 212
            },
            "flags": 16,
            "start": 180,
            "end": 213
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 97,
                            "start": 213,
                            "end": 215
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 216,
                            "end": 219
                        },
                        "flags": 97,
                        "start": 213,
                        "end": 219
                    },
                    "expression": {
                        "kind": 201392131,
                        "text": "baz",
                        "rawText": "\"baz\"",
                        "flags": 96,
                        "start": 220,
                        "end": 225
                    },
                    "flags": 536870944,
                    "start": 213,
                    "end": 226
                },
                "operatorToken": {
                    "kind": 4140,
                    "flags": 96,
                    "start": 226,
                    "end": 230
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "result",
                            "rawText": "result",
                            "flags": 96,
                            "start": 230,
                            "end": 237
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 238,
                            "end": 241
                        },
                        "flags": 96,
                        "start": 230,
                        "end": 241
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 242,
                        "end": 245
                    },
                    "flags": 96,
                    "start": 230,
                    "end": 245
                },
                "flags": 32,
                "start": 213,
                "end": 245
            },
            "flags": 16,
            "start": 213,
            "end": 246
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 97,
                                    "start": 246,
                                    "end": 249
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 250,
                                    "end": 253
                                },
                                "flags": 97,
                                "start": 246,
                                "end": 253
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 254,
                                "end": 257
                            },
                            "flags": 97,
                            "start": 246,
                            "end": 257
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 258,
                            "end": 258
                        },
                        "flags": 268435488,
                        "start": 246,
                        "end": 259
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 260,
                        "end": 263
                    },
                    "flags": 268435488,
                    "start": 246,
                    "end": 263
                },
                "operatorToken": {
                    "kind": 4139,
                    "flags": 96,
                    "start": 263,
                    "end": 267
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "result",
                                    "rawText": "result",
                                    "flags": 96,
                                    "start": 267,
                                    "end": 274
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 275,
                                    "end": 278
                                },
                                "flags": 96,
                                "start": 267,
                                "end": 278
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 279,
                                "end": 282
                            },
                            "flags": 96,
                            "start": 267,
                            "end": 282
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 283,
                            "end": 283
                        },
                        "flags": 268435488,
                        "start": 267,
                        "end": 284
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 285,
                        "end": 288
                    },
                    "flags": 268435488,
                    "start": 267,
                    "end": 288
                },
                "flags": 32,
                "start": 246,
                "end": 288
            },
            "flags": 16,
            "start": 246,
            "end": 289
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 97,
                                    "start": 289,
                                    "end": 291
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 292,
                                    "end": 295
                                },
                                "flags": 97,
                                "start": 289,
                                "end": 295
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 296,
                                "end": 299
                            },
                            "flags": 97,
                            "start": 289,
                            "end": 299
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 300,
                            "end": 300
                        },
                        "flags": 268435488,
                        "start": 289,
                        "end": 301
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 302,
                        "end": 305
                    },
                    "flags": 268435488,
                    "start": 289,
                    "end": 305
                },
                "operatorToken": {
                    "kind": 4138,
                    "flags": 96,
                    "start": 305,
                    "end": 309
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "result",
                                    "rawText": "result",
                                    "flags": 96,
                                    "start": 309,
                                    "end": 316
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 317,
                                    "end": 320
                                },
                                "flags": 96,
                                "start": 309,
                                "end": 320
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 321,
                                "end": 324
                            },
                            "flags": 96,
                            "start": 309,
                            "end": 324
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 325,
                            "end": 325
                        },
                        "flags": 268435488,
                        "start": 309,
                        "end": 326
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 327,
                        "end": 330
                    },
                    "flags": 268435488,
                    "start": 309,
                    "end": 330
                },
                "flags": 32,
                "start": 289,
                "end": 330
            },
            "flags": 16,
            "start": 289,
            "end": 331
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 97,
                        "start": 331,
                        "end": 333
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 334,
                        "end": 337
                    },
                    "flags": 97,
                    "start": 331,
                    "end": 337
                },
                "operatorToken": {
                    "kind": 4138,
                    "flags": 96,
                    "start": 337,
                    "end": 341
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "result",
                        "rawText": "result",
                        "flags": 96,
                        "start": 341,
                        "end": 348
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 349,
                        "end": 352
                    },
                    "flags": 96,
                    "start": 341,
                    "end": 352
                },
                "flags": 32,
                "start": 331,
                "end": 352
            },
            "flags": 16,
            "start": 331,
            "end": 353
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 97,
                        "start": 353,
                        "end": 355
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 356,
                        "end": 359
                    },
                    "flags": 97,
                    "start": 353,
                    "end": 359
                },
                "operatorToken": {
                    "kind": 4140,
                    "flags": 96,
                    "start": 359,
                    "end": 363
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "result",
                        "rawText": "result",
                        "flags": 96,
                        "start": 363,
                        "end": 370
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 371,
                        "end": 374
                    },
                    "flags": 96,
                    "start": 363,
                    "end": 374
                },
                "flags": 32,
                "start": 353,
                "end": 374
            },
            "flags": 16,
            "start": 353,
            "end": 375
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "results",
                                "rawText": "results",
                                "flags": 96,
                                "start": 378,
                                "end": 385
                            },
                            "operatorToken": {
                                "kind": 4138,
                                "flags": 96,
                                "start": 385,
                                "end": 389
                            },
                            "right": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 391,
                                    "end": 391
                                },
                                "flags": 32,
                                "start": 389,
                                "end": 392
                            },
                            "flags": 32,
                            "start": 375,
                            "end": 392
                        },
                        "flags": 32,
                        "start": 375,
                        "end": 393
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "push",
                        "rawText": "push",
                        "flags": 96,
                        "start": 394,
                        "end": 398
                    },
                    "flags": 32,
                    "start": 375,
                    "end": 398
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 100,
                            "rawText": "100",
                            "flags": 96,
                            "start": 399,
                            "end": 402
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 399,
                    "end": 402
                },
                "flags": 268435488,
                "start": 375,
                "end": 403
            },
            "flags": 16,
            "start": 375,
            "end": 404
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "results",
                                "rawText": "results",
                                "flags": 96,
                                "start": 406,
                                "end": 413
                            },
                            "operatorToken": {
                                "kind": 4139,
                                "flags": 96,
                                "start": 413,
                                "end": 417
                            },
                            "right": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 419,
                                    "end": 419
                                },
                                "flags": 32,
                                "start": 417,
                                "end": 420
                            },
                            "flags": 32,
                            "start": 404,
                            "end": 420
                        },
                        "flags": 32,
                        "start": 404,
                        "end": 421
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "push",
                        "rawText": "push",
                        "flags": 96,
                        "start": 422,
                        "end": 426
                    },
                    "flags": 32,
                    "start": 404,
                    "end": 426
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 100,
                            "rawText": "100",
                            "flags": 96,
                            "start": 427,
                            "end": 430
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 427,
                    "end": 430
                },
                "flags": 268435488,
                "start": 404,
                "end": 431
            },
            "flags": 16,
            "start": 404,
            "end": 432
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "results",
                                "rawText": "results",
                                "flags": 96,
                                "start": 434,
                                "end": 441
                            },
                            "operatorToken": {
                                "kind": 4140,
                                "flags": 96,
                                "start": 441,
                                "end": 445
                            },
                            "right": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 447,
                                    "end": 447
                                },
                                "flags": 32,
                                "start": 445,
                                "end": 448
                            },
                            "flags": 32,
                            "start": 432,
                            "end": 448
                        },
                        "flags": 32,
                        "start": 432,
                        "end": 449
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "push",
                        "rawText": "push",
                        "flags": 96,
                        "start": 450,
                        "end": 454
                    },
                    "flags": 32,
                    "start": 432,
                    "end": 454
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 100,
                            "rawText": "100",
                            "flags": 96,
                            "start": 455,
                            "end": 458
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 455,
                    "end": 458
                },
                "flags": 268435488,
                "start": 432,
                "end": 459
            },
            "flags": 16,
            "start": 432,
            "end": 460
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "start": 460,
                "end": 464
            },
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "thing",
                        "rawText": "thing",
                        "flags": 96,
                        "start": 467,
                        "end": 472
                    },
                    "operatorToken": {
                        "kind": 4139,
                        "flags": 96,
                        "start": 472,
                        "end": 476
                    },
                    "right": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "thing",
                            "rawText": "thing",
                            "flags": 96,
                            "start": 476,
                            "end": 482
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "original",
                            "rawText": "original",
                            "flags": 96,
                            "start": 483,
                            "end": 491
                        },
                        "flags": 96,
                        "start": 476,
                        "end": 491
                    },
                    "flags": 32,
                    "start": 466,
                    "end": 491
                },
                "flags": 32,
                "start": 466,
                "end": 492
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "start": 495,
                    "end": 495
                },
                "flags": 16,
                "start": 493,
                "end": 497
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "start": 460,
            "end": 497
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "start": 497,
                "end": 500
            },
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "thing",
                        "rawText": "thing",
                        "flags": 96,
                        "start": 503,
                        "end": 508
                    },
                    "operatorToken": {
                        "kind": 4139,
                        "flags": 96,
                        "start": 508,
                        "end": 512
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "defaultValue",
                        "rawText": "defaultValue",
                        "flags": 96,
                        "start": 512,
                        "end": 525
                    },
                    "flags": 32,
                    "start": 502,
                    "end": 525
                },
                "flags": 32,
                "start": 502,
                "end": 526
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "start": 529,
                    "end": 529
                },
                "flags": 16,
                "start": 527,
                "end": 531
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "start": 497,
            "end": 531
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "start": 531,
                "end": 534
            },
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "thing",
                        "rawText": "thing",
                        "flags": 96,
                        "start": 537,
                        "end": 542
                    },
                    "operatorToken": {
                        "kind": 4138,
                        "flags": 96,
                        "start": 542,
                        "end": 546
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "defaultValue",
                        "rawText": "defaultValue",
                        "flags": 96,
                        "start": 546,
                        "end": 559
                    },
                    "flags": 32,
                    "start": 536,
                    "end": 559
                },
                "flags": 32,
                "start": 536,
                "end": 560
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "start": 563,
                    "end": 563
                },
                "flags": 16,
                "start": 561,
                "end": 565
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "start": 531,
            "end": 565
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "start": 565,
                "end": 568
            },
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "thing",
                        "rawText": "thing",
                        "flags": 96,
                        "start": 571,
                        "end": 576
                    },
                    "operatorToken": {
                        "kind": 4140,
                        "flags": 96,
                        "start": 576,
                        "end": 580
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "defaultValue",
                        "rawText": "defaultValue",
                        "flags": 96,
                        "start": 580,
                        "end": 593
                    },
                    "flags": 32,
                    "start": 570,
                    "end": 593
                },
                "flags": 32,
                "start": 570,
                "end": 594
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "start": 597,
                    "end": 597
                },
                "flags": 16,
                "start": 595,
                "end": 599
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "start": 565,
            "end": 599
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 97,
                    "start": 599,
                    "end": 602
                },
                "operatorToken": {
                    "kind": 4138,
                    "flags": 96,
                    "start": 602,
                    "end": 606
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 608,
                                "end": 609
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "start": 608,
                        "end": 610
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 610,
                        "end": 613
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 613,
                        "end": 615
                    },
                    "flags": 32,
                    "start": 606,
                    "end": 615
                },
                "flags": 32,
                "start": 599,
                "end": 615
            },
            "flags": 16,
            "start": 599,
            "end": 616
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 97,
                    "start": 616,
                    "end": 618
                },
                "operatorToken": {
                    "kind": 4139,
                    "flags": 96,
                    "start": 618,
                    "end": 622
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 624,
                                "end": 625
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "start": 624,
                        "end": 626
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 626,
                        "end": 629
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 629,
                        "end": 631
                    },
                    "flags": 32,
                    "start": 622,
                    "end": 631
                },
                "flags": 32,
                "start": 616,
                "end": 631
            },
            "flags": 16,
            "start": 616,
            "end": 632
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 97,
                    "start": 632,
                    "end": 634
                },
                "operatorToken": {
                    "kind": 4140,
                    "flags": 96,
                    "start": 634,
                    "end": 638
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 640,
                                "end": 641
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "start": 640,
                        "end": 642
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 642,
                        "end": 645
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 645,
                        "end": 647
                    },
                    "flags": 32,
                    "start": 638,
                    "end": 647
                },
                "flags": 32,
                "start": 632,
                "end": 647
            },
            "flags": 16,
            "start": 632,
            "end": 648
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 97,
                    "start": 648,
                    "end": 651
                },
                "operatorToken": {
                    "kind": 4138,
                    "flags": 96,
                    "start": 651,
                    "end": 655
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 657,
                                        "end": 658
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "toString",
                                        "rawText": "toString",
                                        "flags": 96,
                                        "start": 659,
                                        "end": 667
                                    },
                                    "flags": 96,
                                    "start": 655,
                                    "end": 667
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 668,
                                    "end": 668
                                },
                                "flags": 268435488,
                                "start": 655,
                                "end": 669
                            },
                            {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 672,
                                            "end": 673
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 672,
                                    "end": 674
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 674,
                                    "end": 677
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 677,
                                    "end": 679
                                },
                                "flags": 32,
                                "start": 670,
                                "end": 679
                            }
                        ],
                        "flags": 32,
                        "start": 655,
                        "end": 679
                    },
                    "flags": 32,
                    "start": 655,
                    "end": 680
                },
                "flags": 32,
                "start": 648,
                "end": 680
            },
            "flags": 16,
            "start": 648,
            "end": 681
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 97,
                    "start": 681,
                    "end": 683
                },
                "operatorToken": {
                    "kind": 4139,
                    "flags": 96,
                    "start": 683,
                    "end": 687
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 689,
                                        "end": 690
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "toString",
                                        "rawText": "toString",
                                        "flags": 96,
                                        "start": 691,
                                        "end": 699
                                    },
                                    "flags": 96,
                                    "start": 687,
                                    "end": 699
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 700,
                                    "end": 700
                                },
                                "flags": 268435488,
                                "start": 687,
                                "end": 701
                            },
                            {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 704,
                                            "end": 705
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 704,
                                    "end": 706
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 706,
                                    "end": 709
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 709,
                                    "end": 711
                                },
                                "flags": 32,
                                "start": 702,
                                "end": 711
                            }
                        ],
                        "flags": 32,
                        "start": 687,
                        "end": 711
                    },
                    "flags": 32,
                    "start": 687,
                    "end": 712
                },
                "flags": 32,
                "start": 681,
                "end": 712
            },
            "flags": 16,
            "start": 681,
            "end": 713
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 97,
                    "start": 713,
                    "end": 715
                },
                "operatorToken": {
                    "kind": 4140,
                    "flags": 96,
                    "start": 715,
                    "end": 719
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 721,
                                        "end": 722
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "toString",
                                        "rawText": "toString",
                                        "flags": 96,
                                        "start": 723,
                                        "end": 731
                                    },
                                    "flags": 96,
                                    "start": 719,
                                    "end": 731
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 732,
                                    "end": 732
                                },
                                "flags": 268435488,
                                "start": 719,
                                "end": 733
                            },
                            {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 736,
                                            "end": 737
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 736,
                                    "end": 738
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 738,
                                    "end": 741
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 741,
                                    "end": 743
                                },
                                "flags": 32,
                                "start": 734,
                                "end": 743
                            }
                        ],
                        "flags": 32,
                        "start": 719,
                        "end": 743
                    },
                    "flags": 32,
                    "start": 719,
                    "end": 744
                },
                "flags": 32,
                "start": 713,
                "end": 744
            },
            "flags": 16,
            "start": 713,
            "end": 745
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "results",
                                "rawText": "results",
                                "flags": 96,
                                "start": 748,
                                "end": 755
                            },
                            "operatorToken": {
                                "kind": 4138,
                                "flags": 96,
                                "start": 755,
                                "end": 759
                            },
                            "right": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "results1",
                                    "rawText": "results1",
                                    "flags": 96,
                                    "start": 759,
                                    "end": 768
                                },
                                "operatorToken": {
                                    "kind": 4138,
                                    "flags": 96,
                                    "start": 768,
                                    "end": 772
                                },
                                "right": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 774,
                                        "end": 774
                                    },
                                    "flags": 32,
                                    "start": 772,
                                    "end": 775
                                },
                                "flags": 32,
                                "start": 759,
                                "end": 775
                            },
                            "flags": 32,
                            "start": 745,
                            "end": 775
                        },
                        "flags": 32,
                        "start": 745,
                        "end": 776
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "push",
                        "rawText": "push",
                        "flags": 96,
                        "start": 777,
                        "end": 781
                    },
                    "flags": 32,
                    "start": 745,
                    "end": 781
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 100,
                            "rawText": "100",
                            "flags": 96,
                            "start": 782,
                            "end": 785
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 782,
                    "end": 785
                },
                "flags": 268435488,
                "start": 745,
                "end": 786
            },
            "flags": 16,
            "start": 745,
            "end": 787
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "results",
                                "rawText": "results",
                                "flags": 96,
                                "start": 789,
                                "end": 796
                            },
                            "operatorToken": {
                                "kind": 4139,
                                "flags": 96,
                                "start": 796,
                                "end": 800
                            },
                            "right": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "results1",
                                    "rawText": "results1",
                                    "flags": 96,
                                    "start": 800,
                                    "end": 809
                                },
                                "operatorToken": {
                                    "kind": 4139,
                                    "flags": 96,
                                    "start": 809,
                                    "end": 813
                                },
                                "right": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 815,
                                        "end": 815
                                    },
                                    "flags": 32,
                                    "start": 813,
                                    "end": 816
                                },
                                "flags": 32,
                                "start": 800,
                                "end": 816
                            },
                            "flags": 32,
                            "start": 787,
                            "end": 816
                        },
                        "flags": 32,
                        "start": 787,
                        "end": 817
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "push",
                        "rawText": "push",
                        "flags": 96,
                        "start": 818,
                        "end": 822
                    },
                    "flags": 32,
                    "start": 787,
                    "end": 822
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 100,
                            "rawText": "100",
                            "flags": 96,
                            "start": 823,
                            "end": 826
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 823,
                    "end": 826
                },
                "flags": 268435488,
                "start": 787,
                "end": 827
            },
            "flags": 16,
            "start": 787,
            "end": 828
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "results",
                                "rawText": "results",
                                "flags": 96,
                                "start": 830,
                                "end": 837
                            },
                            "operatorToken": {
                                "kind": 4140,
                                "flags": 96,
                                "start": 837,
                                "end": 841
                            },
                            "right": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "results1",
                                    "rawText": "results1",
                                    "flags": 96,
                                    "start": 841,
                                    "end": 850
                                },
                                "operatorToken": {
                                    "kind": 4140,
                                    "flags": 96,
                                    "start": 850,
                                    "end": 854
                                },
                                "right": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 856,
                                        "end": 856
                                    },
                                    "flags": 32,
                                    "start": 854,
                                    "end": 857
                                },
                                "flags": 32,
                                "start": 841,
                                "end": 857
                            },
                            "flags": 32,
                            "start": 828,
                            "end": 857
                        },
                        "flags": 32,
                        "start": 828,
                        "end": 858
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "push",
                        "rawText": "push",
                        "flags": 96,
                        "start": 859,
                        "end": 863
                    },
                    "flags": 32,
                    "start": 828,
                    "end": 863
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 100,
                            "rawText": "100",
                            "flags": 96,
                            "start": 864,
                            "end": 867
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 864,
                    "end": 867
                },
                "flags": 268435488,
                "start": 828,
                "end": 868
            },
            "flags": 16,
            "start": 828,
            "end": 869
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 97,
                        "start": 869,
                        "end": 874
                    },
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "incr",
                            "rawText": "incr",
                            "flags": 96,
                            "start": 875,
                            "end": 879
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 880,
                            "end": 880
                        },
                        "flags": 268435488,
                        "start": 875,
                        "end": 881
                    },
                    "flags": 536870944,
                    "start": 869,
                    "end": 882
                },
                "operatorToken": {
                    "kind": 4138,
                    "flags": 96,
                    "start": 882,
                    "end": 886
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "incr",
                        "rawText": "incr",
                        "flags": 96,
                        "start": 886,
                        "end": 891
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 892,
                        "end": 892
                    },
                    "flags": 268435488,
                    "start": 886,
                    "end": 893
                },
                "flags": 32,
                "start": 869,
                "end": 893
            },
            "flags": 16,
            "start": 869,
            "end": 894
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 130,
                        "member": {
                            "kind": 134299649,
                            "text": "oobj",
                            "rawText": "oobj",
                            "flags": 97,
                            "start": 894,
                            "end": 899
                        },
                        "expression": {
                            "kind": 201392131,
                            "text": "obj",
                            "rawText": "\"obj\"",
                            "flags": 96,
                            "start": 900,
                            "end": 905
                        },
                        "flags": 536870944,
                        "start": 894,
                        "end": 906
                    },
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "incr",
                            "rawText": "incr",
                            "flags": 96,
                            "start": 907,
                            "end": 911
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 912,
                            "end": 912
                        },
                        "flags": 268435488,
                        "start": 907,
                        "end": 913
                    },
                    "flags": 536870944,
                    "start": 894,
                    "end": 914
                },
                "operatorToken": {
                    "kind": 4138,
                    "flags": 96,
                    "start": 914,
                    "end": 918
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "incr",
                        "rawText": "incr",
                        "flags": 96,
                        "start": 918,
                        "end": 923
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 924,
                        "end": 924
                    },
                    "flags": 268435488,
                    "start": 918,
                    "end": 925
                },
                "flags": 32,
                "start": 894,
                "end": 925
            },
            "flags": 16,
            "start": 894,
            "end": 926
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 97,
                        "start": 926,
                        "end": 930
                    },
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "incr",
                            "rawText": "incr",
                            "flags": 96,
                            "start": 931,
                            "end": 935
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 936,
                            "end": 936
                        },
                        "flags": 268435488,
                        "start": 931,
                        "end": 937
                    },
                    "flags": 536870944,
                    "start": 926,
                    "end": 938
                },
                "operatorToken": {
                    "kind": 4139,
                    "flags": 96,
                    "start": 938,
                    "end": 942
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "incr",
                        "rawText": "incr",
                        "flags": 96,
                        "start": 942,
                        "end": 947
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 948,
                        "end": 948
                    },
                    "flags": 268435488,
                    "start": 942,
                    "end": 949
                },
                "flags": 32,
                "start": 926,
                "end": 949
            },
            "flags": 16,
            "start": 926,
            "end": 950
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 130,
                        "member": {
                            "kind": 134299649,
                            "text": "oobj",
                            "rawText": "oobj",
                            "flags": 97,
                            "start": 950,
                            "end": 955
                        },
                        "expression": {
                            "kind": 201392131,
                            "text": "obj",
                            "rawText": "\"obj\"",
                            "flags": 96,
                            "start": 956,
                            "end": 961
                        },
                        "flags": 536870944,
                        "start": 950,
                        "end": 962
                    },
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "incr",
                            "rawText": "incr",
                            "flags": 96,
                            "start": 963,
                            "end": 967
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 968,
                            "end": 968
                        },
                        "flags": 268435488,
                        "start": 963,
                        "end": 969
                    },
                    "flags": 536870944,
                    "start": 950,
                    "end": 970
                },
                "operatorToken": {
                    "kind": 4139,
                    "flags": 96,
                    "start": 970,
                    "end": 974
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "incr",
                        "rawText": "incr",
                        "flags": 96,
                        "start": 974,
                        "end": 979
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 980,
                        "end": 980
                    },
                    "flags": 268435488,
                    "start": 974,
                    "end": 981
                },
                "flags": 32,
                "start": 950,
                "end": 981
            },
            "flags": 16,
            "start": 950,
            "end": 982
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 97,
                        "start": 982,
                        "end": 986
                    },
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "incr",
                            "rawText": "incr",
                            "flags": 96,
                            "start": 987,
                            "end": 991
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 992,
                            "end": 992
                        },
                        "flags": 268435488,
                        "start": 987,
                        "end": 993
                    },
                    "flags": 536870944,
                    "start": 982,
                    "end": 994
                },
                "operatorToken": {
                    "kind": 4140,
                    "flags": 96,
                    "start": 994,
                    "end": 998
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "incr",
                        "rawText": "incr",
                        "flags": 96,
                        "start": 998,
                        "end": 1003
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1004,
                        "end": 1004
                    },
                    "flags": 268435488,
                    "start": 998,
                    "end": 1005
                },
                "flags": 32,
                "start": 982,
                "end": 1005
            },
            "flags": 16,
            "start": 982,
            "end": 1006
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 130,
                        "member": {
                            "kind": 134299649,
                            "text": "oobj",
                            "rawText": "oobj",
                            "flags": 97,
                            "start": 1006,
                            "end": 1011
                        },
                        "expression": {
                            "kind": 201392131,
                            "text": "obj",
                            "rawText": "\"obj\"",
                            "flags": 96,
                            "start": 1012,
                            "end": 1017
                        },
                        "flags": 536870944,
                        "start": 1006,
                        "end": 1018
                    },
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "incr",
                            "rawText": "incr",
                            "flags": 96,
                            "start": 1019,
                            "end": 1023
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1024,
                            "end": 1024
                        },
                        "flags": 268435488,
                        "start": 1019,
                        "end": 1025
                    },
                    "flags": 536870944,
                    "start": 1006,
                    "end": 1026
                },
                "operatorToken": {
                    "kind": 4140,
                    "flags": 96,
                    "start": 1026,
                    "end": 1030
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "incr",
                        "rawText": "incr",
                        "flags": 96,
                        "start": 1030,
                        "end": 1035
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1036,
                        "end": 1036
                    },
                    "flags": 268435488,
                    "start": 1030,
                    "end": 1037
                },
                "flags": 32,
                "start": 1006,
                "end": 1037
            },
            "flags": 16,
            "start": 1006,
            "end": 1038
        }
    ],
    "isModule": false,
    "source": "a ||= b;\n\na &&= \"foo\";\nb ||= \"foo\";\nc ??= \"foo\";\n\nd &&= 42;\ne ||= 42;\nf ??= 42;\n\na.baz &&= result.baz;\nb.baz ||= result.baz;\nc.baz ??= result.baz;\n\na.foo[\"baz\"] &&= result.foo.baz;\nb.foo[\"baz\"] ||= result.foo.baz;\nc.foo[\"baz\"] ??= result.foo.baz;\n\na.foo.bar().baz &&= result.foo.bar().baz;\nb.foo.bar().baz ||= result.foo.bar().baz;\nb.baz ||= result.baz;\nc.baz ??= result.baz;\n\n(results ||= []).push(100);\n(results &&= []).push(100);\n(results ??= []).push(100);\n\nif ((thing &&= thing.original)) {\n}\nif ((thing &&= defaultValue)) {\n}\nif ((thing ||= defaultValue)) {\n}\nif ((thing ??= defaultValue)) {\n}\n\nf ||= (a) => a;\nf &&= (a) => a;\nf ??= (a) => a;\n\nf ||= (f.toString(), (a) => a);\nf &&= (f.toString(), (a) => a);\nf ??= (f.toString(), (a) => a);\n\n(results ||= results1 ||= []).push(100);\n(results &&= results1 &&= []).push(100);\n(results ??= results1 ??= []).push(100);\n\nobj[incr()] ||= incr();\noobj[\"obj\"][incr()] ||= incr();\nobj[incr()] &&= incr();\noobj[\"obj\"][incr()] &&= incr();\nobj[incr()] ??= incr();\noobj[\"obj\"][incr()] ??= incr();",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1038
}
```

### Printed

```javascript

a ||= b;
a &&= "\"foo\"";
b ||= "\"foo\"";
c ??= "\"foo\"";
d &&= 42;
e ||= 42;
f ??= 42;
a.baz &&= result.baz;
b.baz ||= result.baz;
c.baz ??= result.baz;
a.foo["\"baz\""] &&= result.foo.baz;
b.foo["\"baz\""] ||= result.foo.baz;
c.foo["\"baz\""] ??= result.foo.baz;
a.foo.bar().baz &&= result.foo.bar().baz;
b.foo.bar().baz ||= result.foo.bar().baz;
b.baz ||= result.baz;
c.baz ??= result.baz;
(results ||= []).push( 100 );
(results &&= []).push( 100 );
(results ??= []).push( 100 );
if ((thing &&= thing.original)) {
}
if ((thing &&= defaultValue)) {
}
if ((thing ||= defaultValue)) {
}
if ((thing ??= defaultValue)) {
}
f ||= ( a ) => a;
f &&= ( a ) => a;
f ??= ( a ) => a;
f ||= ( f.toString(), ( a ) => a );
f &&= ( f.toString(), ( a ) => a );
f ??= ( f.toString(), ( a ) => a );
(results ||= results1 ||= []).push( 100 );
(results &&= results1 &&= []).push( 100 );
(results ??= results1 ??= []).push( 100 );
obj[incr()] ||= incr();
oobj["\"obj\""][incr()] ||= incr();
obj[incr()] &&= incr();
oobj["\"obj\""][incr()] &&= incr();
obj[incr()] ??= incr();
oobj["\"obj\""][incr()] ??= incr();

```

### Diagnostics

```javascript
✔ No errors
```

