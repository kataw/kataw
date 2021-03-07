# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/binary/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\binary\gen\for_header
> :: test: for header
> :: case: a / b + c
## Input

`````js
for ( a / b + c ;;);
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "for ( a / b + c ;;);",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2099288,
                "initializer": {
                    "kind": 65563,
                    "left": {
                        "kind": 65563,
                        "left": {
                            "kind": 196712,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 7
                        },
                        "operator": "/",
                        "right": {
                            "kind": 196712,
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 11
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 11
                    },
                    "operator": "+",
                    "right": {
                        "kind": 196712,
                        "text": "c",
                        "rawText": "c",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 15
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 15
                },
                "condition": null,
                "incrementor": null,
                "isVariableDeclarationList": false,
                "statement": {
                    "kind": 6291526,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 20
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 20
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 20
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

