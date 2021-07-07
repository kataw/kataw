# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: foo--.toString();
## Options

`````js
{}
`````
## Input

`````js
"use strict"; foo--.toString();
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
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196636,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 19
                },
                "operand": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 17
                },
                "flags": 32,
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "toString",
                    "rawText": "toString",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 28
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 29
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 20,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 20,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; foo--.toString();",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 19, end: 20

```

