# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
(valid
  ? helper.responseBody(this.currentUser)
  : helper.responseBody(this.defaultUser))
.prop;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 134299649,
                            "text": "valid",
                            "rawText": "valid",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 6
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 10
                        },
                        "consequent": {
                            "kind": 131,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "helper",
                                    "rawText": "helper",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 17
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "responseBody",
                                    "rawText": "responseBody",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 30
                                },
                                "flags": 96,
                                "transformFlags": 2,
                                "start": 10,
                                "end": 30
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 129,
                                        "member": {
                                            "kind": 4276321,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 35
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "currentUser",
                                            "rawText": "currentUser",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 47
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 31,
                                        "end": 47
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 47
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 10,
                            "end": 48
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 48,
                            "end": 52
                        },
                        "alternate": {
                            "kind": 131,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "helper",
                                    "rawText": "helper",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 52,
                                    "end": 59
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "responseBody",
                                    "rawText": "responseBody",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 60,
                                    "end": 72
                                },
                                "flags": 96,
                                "transformFlags": 2,
                                "start": 52,
                                "end": 72
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 129,
                                        "member": {
                                            "kind": 4276321,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 73,
                                            "end": 77
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "defaultUser",
                                            "rawText": "defaultUser",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 78,
                                            "end": 89
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 73,
                                        "end": 89
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 73,
                                "end": 89
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 52,
                            "end": 90
                        },
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 90
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 91
                },
                "expression": {
                    "kind": 134299649,
                    "text": "prop",
                    "rawText": "prop",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 93,
                    "end": 97
                },
                "flags": 32,
                "transformFlags": 2,
                "start": 0,
                "end": 97
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 98
        }
    ],
    "isModule": false,
    "source": "(valid\n  ? helper.responseBody(this.currentUser)\n  : helper.responseBody(this.defaultUser))\n.prop;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 98
}
```

### Printed

```javascript

(
  valid
    ? helper.responseBody(this.currentUser)
    : helper.responseBody(this.defaultUser)
).prop;
```

### Diagnostics

```javascript
✔ No errors
```

