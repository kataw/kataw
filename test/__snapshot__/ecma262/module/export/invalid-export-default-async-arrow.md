# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default async\n() => {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 258,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "declaration": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 20
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 14,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "n",
                    "rawText": "n",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 22
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 23
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 21,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 21,
            "end": 24
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 29,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 27,
            "end": 30
        }
    ],
    "isModule": true,
    "source": "export default async\\n() => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 14, end: 20
✖ Invalid hexadecimal escape sequence - start: 20, end: 20
✖ Expected a `;` - start: 20, end: 21
✖ Expected a `;` - start: 24, end: 27

```

