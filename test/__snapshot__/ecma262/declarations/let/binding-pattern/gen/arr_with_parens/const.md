# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/binding-pattern/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/binding-pattern/gen/arr_with_parens
> :: test: arr with parens
> :: case: const
## Options

`````js
{}
`````
## Input

`````js
const [(x)] = v
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 7
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 7
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 7
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 9
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 7,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 7,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "v",
                "rawText": "v",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "const [(x)] = v",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 7, end: 8
✖ Missing initializer in const declaration - start: 7, end: 8
✖ Lexical declaration expected - start: 7, end: 8
✖ ']' is not allowed here. Did you mean ';'? - start: 10, end: 11
✖ Declaration or statement expected - start: 11, end: 13

```

