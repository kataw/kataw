# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: for (a+b of c) d;
## Options

`````js
{}
`````
## Input

`````js
"use strict"; for (a+b of c) d;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 17
            },
            "initializer": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 20
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 21
                },
                "right": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 22
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 13,
                "end": 22
            },
            "condition": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "transformFlags": 0,
                "start": 25,
                "end": 27
            },
            "incrementor": {
                "kind": 134299649,
                "text": "of",
                "rawText": "of",
                "flags": 96,
                "transformFlags": 0,
                "start": 22,
                "end": 25
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 30
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 28,
                "end": 31
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 13,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; for (a+b of c) d;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

"\"use strict\"";
for (a + b; c; of) d;
```

### Diagnostics

```javascript
✔ No errors
```

