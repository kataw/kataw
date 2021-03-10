# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true }
`````

## Input

`````js
const str = `${__dirname}/test/*.js`;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "const str = `${__dirname}/test/*.js`;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "str",
                                "rawText": "str",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 5,
                                "end": 9
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66261,
                                "spans": [
                                    {
                                        "kind": 66263,
                                        "rawText": "",
                                        "text": "",
                                        "expression": {
                                            "kind": 196712,
                                            "text": "__dirname",
                                            "rawText": "__dirname",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 24
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 11,
                                        "end": 24
                                    }
                                ],
                                "tail": {
                                    "kind": 4260568,
                                    "rawText": "/test/*.js",
                                    "text": "/test/*.js",
                                    "literal": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 24,
                                    "end": 36
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 11,
                                "end": 36
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 36
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 36
                },
                "flags": 16,
                "intersects": false,
                "transformFlags": 769,
                "start": 0,
                "end": 37
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 37
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
