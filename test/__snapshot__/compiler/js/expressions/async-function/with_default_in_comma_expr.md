# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
x, [foo = y, bar] = doo
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "x, [foo = y, bar] = doo",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65590,
                    "expressions": [
                        {
                            "kind": 196712,
                            "text": "x",
                            "rawText": "x",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 1
                        },
                        {
                            "kind": 65550,
                            "left": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 65550,
                                            "left": {
                                                "kind": 196712,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 4,
                                                "end": 7
                                            },
                                            "operator": "=",
                                            "right": {
                                                "kind": 196712,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 9,
                                                "end": 11
                                            },
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 11
                                        },
                                        {
                                            "kind": 196712,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 16
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 17
                            },
                            "operator": "=",
                            "right": {
                                "kind": 196712,
                                "text": "doo",
                                "rawText": "doo",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 23
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 23
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 23
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 23
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 23
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

