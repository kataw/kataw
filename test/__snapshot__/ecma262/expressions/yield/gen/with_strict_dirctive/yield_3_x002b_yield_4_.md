# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: yield 3 + yield 4;
## Options

`````js
{}
`````
## Input

`````js
'use strict'; yield 3 + yield 4;
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
            "rawText": "'use strict'",
            "flags": 4194400,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "yield",
                "rawText": "yield",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 3,
                    "rawText": "3",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 23
                },
                "right": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 29
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 19,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 19,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 4,
                "rawText": "4",
                "flags": 96,
                "transformFlags": 0,
                "start": 29,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 29,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "'use strict'; yield 3 + yield 4;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 19, end: 21
✖ Expected a `;` - start: 29, end: 31

```

