# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
type TupleWithRest = [number, ...(1 extends 2 ? string[] : number[])];
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "type TupleWithRest = [number, ...(1 extends 2 ? string[] : number[])];",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "TupleWithRest",
                    "rawText": "TupleWithRest",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 18
                },
                "type": {
                    "kind": 8416,
                    "elementTypes": [
                        {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 22,
                            "end": 28
                        },
                        {
                            "kind": 8385,
                            "type": {
                                "kind": 8369,
                                "type": {
                                    "kind": 8249,
                                    "checkType": {
                                        "kind": 8355,
                                        "value": 1,
                                        "rawValue": "1",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 34,
                                        "end": 35
                                    },
                                    "extendsType": {
                                        "kind": 8355,
                                        "value": 2,
                                        "rawValue": "2",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 43,
                                        "end": 45
                                    },
                                    "trueType": {
                                        "kind": 8199,
                                        "elementType": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 47,
                                            "end": 54
                                        },
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 47,
                                        "end": 58
                                    },
                                    "falseType": {
                                        "kind": 8199,
                                        "elementType": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 58,
                                            "end": 65
                                        },
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 58,
                                        "end": 68
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 34,
                                    "end": 67
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 33,
                                "end": 68
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 29,
                            "end": 68
                        }
                    ],
                    "multiline": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 20,
                    "end": 69
                },
                "typeParameters": null,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 70
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 70
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 70
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

