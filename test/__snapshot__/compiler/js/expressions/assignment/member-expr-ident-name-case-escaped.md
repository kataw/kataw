# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
var obj = {};

obj.c\u0061se = 42;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "var obj = {};\n\nobj.c\\u0061se = 42;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "obj",
                                "rawText": "obj",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 3,
                                "end": 7
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67224232,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 11
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 12
                            },
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 65536,
                            "end": 12
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 12
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 66232,
                        "member": {
                            "kind": 196712,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 18
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "case",
                            "rawText": "c\\u0061se",
                            "flags": 37814272,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 28
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 28,
                        "period": {
                            "kind": 254,
                            "pos": 18,
                            "end": 19
                        }
                    },
                    "operator": "=",
                    "right": {
                        "kind": 4261540,
                        "text": 42,
                        "rawText": "42",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 30,
                        "end": 33
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 33
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 34
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 34
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

