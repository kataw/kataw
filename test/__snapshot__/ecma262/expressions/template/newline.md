# Kataw parser test case

## Input

`````js
`
`

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
                "kind": 458761,
                "text": "\n",
                "rawText": "\n",
                "flags": 134217824,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 3
        }
    ],
    "isModule": false,
    "source": "`\n`\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 4
}
```

### Printed

```javascript
`
`;
```

### Diagnostics

```javascript
✔ No errors
```

