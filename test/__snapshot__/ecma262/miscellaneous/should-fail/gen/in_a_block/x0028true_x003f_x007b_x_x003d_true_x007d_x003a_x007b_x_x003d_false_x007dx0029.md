# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: (true ? { x = true } : { x = false })
## Options

`````js
{}
`````
## Input

`````js
{ (true ? { x = true } : { x = false }) }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 24752947,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 7
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 9
                                },
                                "consequent": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 301,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 11,
                                                    "end": 13
                                                },
                                                "right": {
                                                    "kind": 24752947,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 15,
                                                    "end": 20
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 20
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 20
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 9,
                                    "end": 22
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 24
                                },
                                "alternate": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 301,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 26,
                                                    "end": 28
                                                },
                                                "right": {
                                                    "kind": 205586437,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 30,
                                                    "end": 36
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 36
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 36
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 24,
                                    "end": 38
                                },
                                "flags": 96,
                                "transformFlags": 4096,
                                "start": 3,
                                "end": 38
                            },
                            "flags": 1,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 39
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 39
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "{ (true ? { x = true } : { x = false }) }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 22, end: 24
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 38, end: 39

```

