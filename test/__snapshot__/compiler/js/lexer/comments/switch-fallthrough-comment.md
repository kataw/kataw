# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true }
`````

## Input

`````js
switch(foo) {
    // foo
    case 1:
        // falls through
    case 2:
        doIt();
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "switch(foo) {\n    // foo\n    case 1:\n        // falls through\n    case 2:\n        doIt();\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097362,
                "expression": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 10
                },
                "caseBlock": {
                    "kind": 2093,
                    "clauses": [
                        {
                            "kind": 46,
                            "expression": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 35
                            },
                            "statements": [],
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 36
                        },
                        {
                            "kind": 46,
                            "expression": {
                                "kind": 4261540,
                                "text": 2,
                                "rawText": "2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 70,
                                "end": 72
                            },
                            "statements": [
                                {
                                    "kind": 2097233,
                                    "expression": {
                                        "kind": 66091,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "doIt",
                                            "rawText": "doIt",
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 73,
                                            "end": 86
                                        },
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 3,
                                            "elements": [],
                                            "trailingComma": false,
                                            "transformFlags": 0,
                                            "flags": 0,
                                            "intersects": false,
                                            "start": 88,
                                            "end": 88
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 86,
                                        "end": 88
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 73,
                                    "end": 89
                                }
                            ],
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 89
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 91
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 91
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 91
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 91
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

