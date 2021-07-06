# Kataw parser test case

## Input

`````js
tag`\ \\`;
tag`\\\ `;
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
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "tag",
                    "rawText": "tag",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "template": {
                    "kind": 458761,
                    "text": " \\",
                    "rawText": "\\ \\\\",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 9
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "tag",
                    "rawText": "tag",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 14
                },
                "template": {
                    "kind": 458761,
                    "text": "\\ ",
                    "rawText": "\\\\\\ ",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 20
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 10,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 10,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "tag`\\ \\\\`;\ntag`\\\\\\ `;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

tag`\ \\`;
tag`\\\ `;

```

### Diagnostics

```javascript
✔ No errors
```

