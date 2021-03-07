# Kataw parser test case

## Input

`````js
@A
class x {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "@A\nclass x {}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 8,
                    "end": 10
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
                    "start": 12,
                    "end": 13
                },
                "decorators": {
                    "kind": 64,
                    "decoratorList": [
                        {
                            "kind": 63,
                            "expression": {
                                "kind": 196712,
                                "text": "A",
                                "rawText": "A",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 2
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1,
                            "end": 2
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 1,
                    "end": 2
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 13
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 13
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

