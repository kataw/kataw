# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
[,,]
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
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 1
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 2
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 4
        }
    ],
    "isModule": false,
    "source": "[,,]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 4
}
```

### Printed

```javascript
[, ,];
```

### Diagnostics

```javascript
✔ No errors
```

