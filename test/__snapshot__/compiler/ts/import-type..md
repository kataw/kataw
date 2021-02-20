# Kataw parser test case

## Input

`````js
type A = typeof import('A');
type B = import("B").X<Y>;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "type A = typeof import('A');\ntype B = import(\"B\").X<Y>;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "A",
                    "rawText": "A",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 4,
                    "end": 6
                },
                "type": {
                    "kind": 114,
                    "isTypeOf": true,
                    "argument": {
                        "kind": 208,
                        "value": "A",
                        "rawValue": "A",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 23,
                        "end": 26
                    },
                    "qualifier": null,
                    "typeArguments": null,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 8,
                    "end": 27
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 28
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "B",
                    "rawText": "B",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 33,
                    "end": 35
                },
                "type": {
                    "kind": 114,
                    "isTypeOf": false,
                    "argument": {
                        "kind": 208,
                        "value": "B",
                        "rawValue": "B",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 45,
                        "end": 48
                    },
                    "qualifier": {
                        "kind": 196711,
                        "text": "X",
                        "rawText": "X",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 50,
                        "end": 51
                    },
                    "typeArguments": {
                        "kind": 227,
                        "typeArgumentsList": [
                            {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Y",
                                    "rawText": "Y",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 52,
                                    "end": 53
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 52,
                                "end": 54
                            }
                        ],
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 52,
                        "end": 53
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 37,
                    "end": 54
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 28,
                "end": 55
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 55
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
    "end": 55
}
```

### Printed


```javascript

type A = typeof import("A");

type B = import("B").X<Y>;

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

