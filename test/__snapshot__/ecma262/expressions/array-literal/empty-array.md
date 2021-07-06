# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
[]
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
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 1
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 2
        }
    ],
    "isModule": true,
    "source": "[]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 2
}
```

### Printed

```javascript

[];
```

### Diagnostics

```javascript
✔ No errors
```

