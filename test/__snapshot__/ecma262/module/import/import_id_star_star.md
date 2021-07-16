# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import a, ** from 'f';
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
            "fromClause": {
                "kind": 325,
                "fromKeyword": null,
                "from": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 12
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "from",
                        "rawText": "from",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 17
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 9,
                    "end": 17
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 9,
                "end": 17
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 8
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "f",
                "rawText": "'f'",
                "flags": 4194400,
                "transformFlags": 0,
                "start": 17,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 17,
            "end": 22
        }
    ],
    "isModule": true,
    "source": "import a, ** from 'f';",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Import declaration expected - start: 9, end: 12
✖ Identifier expected - start: 9, end: 12
✖ '; ' expected - start: 17, end: 21

```

