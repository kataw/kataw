# Kataw parser test case

## Input

`````js
foo<A>();
foo<number>();
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "foo<A>();\nfoo<number>();",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 3
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 5
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 4,
                                "end": 6
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 4,
                        "end": 6
                    },
                    "argumentList": {
                        "kind": 3,
                        "elements": [],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "intersects": false,
                        "start": 7,
                        "end": 7
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 3,
                    "end": 8
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 13
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 14,
                                "end": 20
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 14,
                        "end": 21
                    },
                    "argumentList": {
                        "kind": 3,
                        "elements": [],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "intersects": false,
                        "start": 22,
                        "end": 22
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 13,
                    "end": 23
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 9,
                "end": 24
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 24
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

