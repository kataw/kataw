# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
x.ꓷꓶꓲꓵꓭꓢꓱ;
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
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "expression": {
                    "kind": 134299649,
                    "text": "ꓷꓶꓲꓵꓭꓢꓱ",
                    "rawText": "ꓷꓶꓲꓵꓭꓢꓱ",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 9
                },
                "flags": 96,
                "transformFlags": 2,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "x.ꓷꓶꓲꓵꓭꓢꓱ;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
x.ꓷꓶꓲꓵꓭꓢꓱ;
```

### Diagnostics

```javascript
✔ No errors
```

