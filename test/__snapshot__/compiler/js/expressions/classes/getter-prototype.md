# Kataw parser test case

## Input

`````js
class x { get prototype(){} }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(class X {})",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 82483,
                        "name": {
                            "kind": 131102,
                            "text": "X",
                            "rawText": "X",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 6,
                            "end": 8
                        },
                        "typeParameters": null,
                        "classHeritage": null,
                        "implementClauses": null,
                        "members": {
                            "kind": 50,
                            "elements": [],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 10,
                            "end": 11
                        },
                        "decorators": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 1,
                        "end": 11
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 12
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 12
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

