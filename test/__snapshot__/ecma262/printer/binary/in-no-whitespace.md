# Kataw parser test case

### Printer Options

`````js
{ printWidth: 80, noWhitespace: true }
`````

### Options

`````js
{ module: true, allowTypes: true }
`````

## Input

`````js
foo in bar
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 6
                },
                "right": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 10
                },
                "flags": 96,
                "transformFlags": 5120,
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
    "source": "foo in bar",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
foo in bar;
```

### Diagnostics

```javascript
✔ No errors
```

