# Kataw parser test case

## Input

`````js
//// [accessorsEmit.ts]
@sealed
class Qux {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "//// [accessorsEmit.ts]\n@sealed\nclass Qux {}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "Qux",
                    "rawText": "Qux",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 37,
                    "end": 41
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
                    "start": 43,
                    "end": 44
                },
                "decorators": {
                    "kind": 64,
                    "decoratorList": [
                        {
                            "kind": 63,
                            "expression": {
                                "kind": 196712,
                                "text": "sealed",
                                "rawText": "sealed",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 31
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 25,
                            "end": 31
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 25,
                    "end": 31
                },
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 44
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 44
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

