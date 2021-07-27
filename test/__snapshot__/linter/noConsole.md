# Kataw parser test case

## Input

`````js
console.log();
`````

## Options

### Parser Options

`````js
{ lint: { noConsole: true } }
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
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "console",
                        "rawText": "console",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 7
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "log",
                        "rawText": "log",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 11
                    },
                    "flags": 96,
                    "transformFlags": 2,
                    "start": 0,
                    "end": 11
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 12
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "console.log();",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unexpected console statement - start: 8, end: 11

```

