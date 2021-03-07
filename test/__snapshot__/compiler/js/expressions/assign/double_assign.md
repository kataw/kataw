# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
[]=n/f>>=v
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "[]=n/f>>=v",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 67207686,
                        "elementList": {
                            "kind": 65605,
                            "elements": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 1
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 2
                    },
                    "operator": "=",
                    "right": {
                        "kind": 65550,
                        "left": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "n",
                                "rawText": "n",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 4
                            },
                            "operator": "/",
                            "right": {
                                "kind": 196712,
                                "text": "f",
                                "rawText": "f",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 6
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 6
                        },
                        "operator": ">>=",
                        "right": {
                            "kind": 196712,
                            "text": "v",
                            "rawText": "v",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 10
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 10
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 10
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 10
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 10
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

