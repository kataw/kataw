# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/array-literal/keywords_should_not_parse_as_regular_idents_in_awkward_places/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/array-literal/keywords_should_not_parse_as_regular_idents_in_awkward_places/gen/in_array
> :: test: in array
> :: case: {x: y}.length
## Options

`````js
{}
`````
## Input

`````js
[ {x: y}.length ]
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 129,
                            "member": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 3,
                                                "end": 4
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 7
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 3,
                                            "end": 7
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 7
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 1,
                                "end": 8
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "length",
                                "rawText": "length",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 15
                            },
                            "flags": 48,
                            "transformFlags": 2,
                            "start": 1,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 15
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "[ {x: y}.length ]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
[{ x: y }.length];
```

### Diagnostics

```javascript
✔ No errors
```

