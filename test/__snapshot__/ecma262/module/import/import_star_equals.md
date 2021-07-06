# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import *= from 'f';
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 9,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "f",
                "rawText": "'f'",
                "flags": 4194400,
                "transformFlags": 0,
                "start": 14,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 14,
            "end": 19
        }
    ],
    "isModule": true,
    "source": "import *= from 'f';",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 6, end: 9
✖ Expected a `;` - start: 6, end: 9
✖ Expected a `;` - start: 14, end: 18

```

