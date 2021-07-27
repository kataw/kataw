# Kataw parser test case

## Input

`````js
debugger;
`````

## Options

### Parser Options

`````js
{ lint: { noDebugger: true } }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 171,
            "debuggerKeyword": {
                "kind": 37757010,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "debugger;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unexpected 'debugger' statement - start: 8, end: 9

```

