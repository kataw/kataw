# Kataw parser test case

## Input

`````js
namespace x {
  export abstract class x {}
}

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "namespace x {\n  export abstract class x {}\n}\n",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097405,
                "name": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 9,
                    "end": 11
                },
                "body": {
                    "kind": 2097404,
                    "statements": [
                        {
                            "kind": 48,
                            "name": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 37,
                                "end": 39
                            },
                            "typeParameters": null,
                            "classHeritage": null,
                            "implementClauses": null,
                            "members": {
                                "kind": 50,
                                "elements": [],
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 1,
                                "parent": null,
                                "emitNode": null,
                                "start": 41,
                                "end": 42
                            },
                            "decorators": null,
                            "flags": 268517408,
                            "intersects": false,
                            "transformFlags": 2097153,
                            "parent": null,
                            "emitNode": null,
                            "start": 31,
                            "end": 42
                        }
                    ],
                    "multiline": true,
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 13,
                    "end": 42
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 44
            }
        ],
        "transformFlags": 0,
        "flags": 81920,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 44
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 45
}
```

### Printed


```javascript

namespace x {
    export abstract class x {

    }
};

```

### Diagnostics


```javascript
@{x2716}@ The `export` keyword can only be used with the module goal - start: 19, end: 0

```

