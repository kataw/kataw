# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/array/keywords_should_not_parse_as_regular_idents_in_awkward_places/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\array\keywords_should_not_parse_as_regular_idents_in_awkward_places\gen\in_array
> :: test: in array
> :: case: true
## Input

`````js
[ true ]
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "[ true ]",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67207686,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 4260391,
                                "text": true,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 6
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 8
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 8
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

