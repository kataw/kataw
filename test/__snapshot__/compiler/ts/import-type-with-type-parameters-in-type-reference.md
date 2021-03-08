# Kataw parser test case

## Input

`````js
type X = A<import("").B<any>>;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "type X = A<import(\"\").B<any>>;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "X",
                    "rawText": "X",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 6
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "A",
                        "rawText": "A",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 10
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 8306,
                                "isTypeOf": false,
                                "argument": {
                                    "kind": 8400,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 18,
                                    "end": 20
                                },
                                "qualifier": {
                                    "kind": 196711,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 23
                                },
                                "typeArguments": {
                                    "kind": 8419,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 24,
                                            "end": 27
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 24,
                                    "end": 27
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 11,
                                "end": 28
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 11,
                        "end": 28
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 8,
                    "end": 30
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 30
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 30
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

