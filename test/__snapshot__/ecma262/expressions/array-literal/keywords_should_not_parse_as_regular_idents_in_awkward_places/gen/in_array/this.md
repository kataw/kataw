# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/array-literal/keywords_should_not_parse_as_regular_idents_in_awkward_places/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/array-literal/keywords_should_not_parse_as_regular_idents_in_awkward_places/gen/in_array
> :: test: in array
> :: case: this
## Options

`````js
{}
`````
## Input

`````js
[ this ]
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
                            "kind": 4276321,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 6
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 6
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "[ this ]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
[this];
```

### Diagnostics

```javascript
✔ No errors
```

