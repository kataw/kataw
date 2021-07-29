# Kataw parser test case

## Input

`````js
{ import "asdf"; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 263,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 8
                        },
                        "typeKeyword": null,
                        "typeofKeyword": null,
                        "fromClause": null,
                        "moduleSpecifier": {
                            "kind": 201392131,
                            "text": "asdf",
                            "rawText": "\"asdf\"",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 15
                        },
                        "importClause": null,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 16
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "{ import \"asdf\"; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

{
    import 'asdf';
}

```

### Diagnostics

```javascript
✔ No errors
```

