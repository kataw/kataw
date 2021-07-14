# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/array-literal/keywords_should_not_parse_as_regular_idents_in_awkward_places/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/array-literal/keywords_should_not_parse_as_regular_idents_in_awkward_places/gen/in_array
> :: test: in array
> :: case: typeof x
## Options

`````js
{}
`````
## Input

`````js
[ typeof x ]
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
                            "kind": 126,
                            "operandToken": {
                                "kind": 138477613,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 8
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 10
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 10
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "[ typeof x ]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
[typeof x];
```

### Diagnostics

```javascript
✔ No errors
```

