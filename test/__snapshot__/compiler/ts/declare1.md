# Kataw parser test case

## Input

`````js
// error: no intialization expected in ambient declarations
declare const c1: boolean = true;
declare const c2: number = 0;
declare const c3 = null, c4 :string = "", c5: any = 0;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "// error: no intialization expected in ambient declarations\ndeclare const c1: boolean = true;\ndeclare const c2: number = 0;\ndeclare const c3 = null, c4 :string = \"\", c5: any = 0;",
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
                                "text": "c1",
                                "rawText": "c1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 73,
                                "end": 76
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 4268070,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 77,
                                "end": 85
                            },
                            "initializer": {
                                "kind": 4260391,
                                "text": true,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 87,
                                "end": 92
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 73,
                            "end": 92
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 73,
                    "end": 92
                },
                "flags": 201342992,
                "intersects": false,
                "transformFlags": 769,
                "start": 67,
                "end": 93
            },
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
                                "text": "c2",
                                "rawText": "c2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 107,
                                "end": 110
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 111,
                                "end": 118
                            },
                            "initializer": {
                                "kind": 4261540,
                                "text": 0,
                                "rawText": "0",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 120,
                                "end": 122
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 107,
                            "end": 122
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 107,
                    "end": 122
                },
                "flags": 201342992,
                "intersects": false,
                "transformFlags": 769,
                "start": 101,
                "end": 123
            },
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
                                "text": "c3",
                                "rawText": "c3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 137,
                                "end": 140
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 4260512,
                                "text": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 142,
                                "end": 147
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 137,
                            "end": 147
                        },
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "c4",
                                "rawText": "c4",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 148,
                                "end": 151
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 153,
                                "end": 159
                            },
                            "initializer": {
                                "kind": 4261583,
                                "text": "",
                                "rawText": "",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 161,
                                "end": 164
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 148,
                            "end": 164
                        },
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "c5",
                                "rawText": "c5",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 165,
                                "end": 168
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 4202498,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 169,
                                "end": 173
                            },
                            "initializer": {
                                "kind": 4261540,
                                "text": 0,
                                "rawText": "0",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 175,
                                "end": 177
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 165,
                            "end": 177
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 137,
                    "end": 177
                },
                "flags": 201326608,
                "intersects": false,
                "transformFlags": 769,
                "start": 131,
                "end": 178
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 178
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 178
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

