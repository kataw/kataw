# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
[...yield]
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 4
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 9
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 9
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 9
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": true,
    "source": "[...yield]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
[...yield];
```

### Diagnostics

```javascript
✔ No errors
```

