# Kataw parser test case

## Input

`````js
x = '\7';

x = '\3';

x = '\378';

x = '\0';

x = '\000';
x = '\100';
x = '\U0000';

x = '\ucafe\uCAFE\u7FFF';
x = '\U0000';
x = '\u{10FFFF}';

x = '\u2028';

x = '\n';
x = '\r';

x = '1\n2';

x = '1\\u20292';

x = '1\\r\n2';

x = '1\u20292';
x = '1\n2';
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
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 201392131,
                    "text": "7",
                    "rawText": "'\\7'",
                    "flags": 4456544,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 8
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 14
                },
                "right": {
                    "kind": 201392131,
                    "text": "3",
                    "rawText": "'\\3'",
                    "flags": 4456544,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 19
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 9,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 9,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 23
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 25
                },
                "right": {
                    "kind": 201392131,
                    "text": "378",
                    "rawText": "'\\378'",
                    "flags": 4456544,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 32
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 20,
                "end": 32
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 20,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 36
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 38
                },
                "right": {
                    "kind": 201392131,
                    "text": "\u0000",
                    "rawText": "'\\0'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 43
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 33,
                "end": 43
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 33,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 47
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 47,
                    "end": 49
                },
                "right": {
                    "kind": 201392131,
                    "text": "\u000000",
                    "rawText": "'\\000'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 49,
                    "end": 56
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 44,
                "end": 56
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 44,
            "end": 57
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 57,
                    "end": 59
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 59,
                    "end": 61
                },
                "right": {
                    "kind": 201392131,
                    "text": "100",
                    "rawText": "'\\100'",
                    "flags": 4456544,
                    "transformFlags": 0,
                    "start": 61,
                    "end": 68
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 57,
                "end": 68
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 57,
            "end": 69
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 69,
                    "end": 71
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 71,
                    "end": 73
                },
                "right": {
                    "kind": 201392131,
                    "text": "U0000",
                    "rawText": "'\\U0000'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 73,
                    "end": 82
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 69,
                "end": 82
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 69,
            "end": 83
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 83,
                    "end": 86
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 86,
                    "end": 88
                },
                "right": {
                    "kind": 201392131,
                    "text": "쫾쫾翿",
                    "rawText": "'\\ucafe\\uCAFE\\u7FFF'",
                    "flags": 4210784,
                    "transformFlags": 0,
                    "start": 88,
                    "end": 109
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 83,
                "end": 109
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 83,
            "end": 110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 110,
                    "end": 112
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 112,
                    "end": 114
                },
                "right": {
                    "kind": 201392131,
                    "text": "U0000",
                    "rawText": "'\\U0000'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 114,
                    "end": 123
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 110,
                "end": 123
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 110,
            "end": 124
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 124,
                    "end": 126
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 126,
                    "end": 128
                },
                "right": {
                    "kind": 201392131,
                    "text": "пϿ",
                    "rawText": "'\\u{10FFFF}'",
                    "flags": 4202592,
                    "transformFlags": 0,
                    "start": 128,
                    "end": 141
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 124,
                "end": 141
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 124,
            "end": 142
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 142,
                    "end": 145
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 145,
                    "end": 147
                },
                "right": {
                    "kind": 201392131,
                    "text": " ",
                    "rawText": "'\\u2028'",
                    "flags": 4210784,
                    "transformFlags": 0,
                    "start": 147,
                    "end": 156
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 142,
                "end": 156
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 142,
            "end": 157
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 157,
                    "end": 160
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 160,
                    "end": 162
                },
                "right": {
                    "kind": 201392131,
                    "text": "\n",
                    "rawText": "'\\n'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 162,
                    "end": 167
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 157,
                "end": 167
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 157,
            "end": 168
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 168,
                    "end": 170
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 170,
                    "end": 172
                },
                "right": {
                    "kind": 201392131,
                    "text": "\r",
                    "rawText": "'\\r'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 172,
                    "end": 177
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 168,
                "end": 177
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 168,
            "end": 178
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 178,
                    "end": 181
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 181,
                    "end": 183
                },
                "right": {
                    "kind": 201392131,
                    "text": "1\n2",
                    "rawText": "'1\\n2'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 183,
                    "end": 190
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 178,
                "end": 190
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 178,
            "end": 191
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 191,
                    "end": 194
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 194,
                    "end": 196
                },
                "right": {
                    "kind": 201392131,
                    "text": "1\\u20292",
                    "rawText": "'1\\\\u20292'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 196,
                    "end": 208
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 191,
                "end": 208
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 191,
            "end": 209
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 209,
                    "end": 212
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 212,
                    "end": 214
                },
                "right": {
                    "kind": 201392131,
                    "text": "1\\r\n2",
                    "rawText": "'1\\\\r\\n2'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 214,
                    "end": 224
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 209,
                "end": 224
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 209,
            "end": 225
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 225,
                    "end": 228
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 228,
                    "end": 230
                },
                "right": {
                    "kind": 201392131,
                    "text": "1 2",
                    "rawText": "'1\\u20292'",
                    "flags": 4210784,
                    "transformFlags": 0,
                    "start": 230,
                    "end": 241
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 225,
                "end": 241
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 225,
            "end": 242
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 242,
                    "end": 244
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 244,
                    "end": 246
                },
                "right": {
                    "kind": 201392131,
                    "text": "1\n2",
                    "rawText": "'1\\n2'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 246,
                    "end": 253
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 242,
                "end": 253
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 242,
            "end": 254
        }
    ],
    "isModule": false,
    "source": "x = '\\7';\n\nx = '\\3';\n\nx = '\\378';\n\nx = '\\0';\n\nx = '\\000';\nx = '\\100';\nx = '\\U0000';\n\nx = '\\ucafe\\uCAFE\\u7FFF';\nx = '\\U0000';\nx = '\\u{10FFFF}';\n\nx = '\\u2028';\n\nx = '\\n';\nx = '\\r';\n\nx = '1\\n2';\n\nx = '1\\\\u20292';\n\nx = '1\\\\r\\n2';\n\nx = '1\\u20292';\nx = '1\\n2';",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 254
}
```

### Printed

```javascript
x = "'\7'";
x = "'\3'";

x = "'\378'";

x = "'\0'";

x = "'\000'";

x = "'\100'";

x = "'U0000'";

x = "'\ucafe\uCAFE\u7FFF'";

x = "'U0000'";

x = "'\u{10FFFF}'";

x = "'\u2028'";

x = "'\n'";

x = "'\r'";

x = "'1\n2'";

x = "'1\\u20292'";

x = "'1\\r\n2'";

x = "'1\u20292'";

x = "'1\n2'";

```

### Diagnostics

```javascript
✔ No errors
```

