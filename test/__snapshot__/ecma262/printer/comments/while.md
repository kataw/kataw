# Kataw parser test case

## Input

`````js
while(
    true
    // Comment
  ) {}

while(true)// Comment
{}

while(true){}// Comment

while(true)/*Comment*/{}

while(
  true // Comment
  && true // Comment
  ){}

while(true) {} // comment

while(true) /* comment */ ++x;

while(1) // Comment
  foo();
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 24752947,
                "flags": 97,
                "transformFlags": 0,
                "start": 6,
                "end": 15
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 36
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 34,
                "end": 37
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 37
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "transformFlags": 0,
                "start": 37,
                "end": 44
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 45,
                "end": 49
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 62
                },
                "flags": 17,
                "transformFlags": 0,
                "start": 50,
                "end": 63
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 37,
            "end": 63
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "transformFlags": 0,
                "start": 63,
                "end": 70
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 71,
                "end": 75
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 77,
                    "end": 77
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 76,
                "end": 78
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 63,
            "end": 78
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "transformFlags": 0,
                "start": 78,
                "end": 95
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 96,
                "end": 100
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 113,
                    "end": 113
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 101,
                "end": 114
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 78,
            "end": 114
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "transformFlags": 0,
                "start": 114,
                "end": 121
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 24752947,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 122,
                    "end": 129
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 129,
                    "end": 145
                },
                "right": {
                    "kind": 24752947,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 145,
                    "end": 150
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 122,
                "end": 150
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 166,
                    "end": 166
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 165,
                "end": 167
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 114,
            "end": 167
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "transformFlags": 0,
                "start": 167,
                "end": 174
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 175,
                "end": 179
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 182,
                    "end": 182
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 180,
                "end": 183
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 167,
            "end": 183
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "transformFlags": 0,
                "start": 183,
                "end": 201
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 202,
                "end": 206
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 128,
                    "operandToken": {
                        "kind": 196635,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 207,
                        "end": 224
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 224,
                        "end": 225
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 207,
                    "end": 225
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 207,
                "end": 226
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 183,
            "end": 226
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "transformFlags": 0,
                "start": 226,
                "end": 233
            },
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "transformFlags": 0,
                "start": 234,
                "end": 235
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 236,
                        "end": 253
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 254,
                        "end": 254
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 236,
                    "end": 255
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 236,
                "end": 256
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 226,
            "end": 256
        }
    ],
    "isModule": false,
    "source": "while(\n    true\n    // Comment\n  ) {}\n\nwhile(true)// Comment\n{}\n\nwhile(true){}// Comment\n\nwhile(true)/*Comment*/{}\n\nwhile(\n  true // Comment\n  && true // Comment\n  ){}\n\nwhile(true) {} // comment\n\nwhile(true) /* comment */ ++x;\n\nwhile(1) // Comment\n  foo();",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 256
}
```

### Printed

```javascript
while (true) {}
while (true) {}

while (true) {} // Comment


while (true) {}

while (true // Comment && true // Comment) {}

while (true) {} // comment


while (true) ++ x;

while (1) foo();

```

### Diagnostics

```javascript
✔ No errors
```

