# Kataw parser test case

## Input

`````js
type A /* comment 1 */ = /* comment 2 */  typeof /* comment 3 */  (B)
`````

## Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 24
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134299891,
                    "typeOfKeyword": {
                        "kind": 138477613,
                        "flags": 64,
                        "start": 24,
                        "end": 48
                    },
                    "type": {
                        "kind": 290,
                        "type": {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "start": 67,
                                "end": 68
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 48,
                            "end": 68
                        },
                        "flags": 2097152,
                        "start": 48,
                        "end": 69
                    },
                    "flags": 2097152,
                    "start": 24,
                    "end": 69
                },
                "flags": 2097152,
                "start": 24,
                "end": 69
            },
            "flags": 64,
            "start": 0,
            "end": 69
        }
    ],
    "isModule": false,
    "source": "type A /* comment 1 */ = /* comment 2 */  typeof /* comment 3 */  (B)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 69
}
```

### Printed

```javascript

type A/* comment 1 */ =/* comment 2 */ typeof/* comment 3 */ (B)

```

### Diagnostics

```javascript
✔ No errors
```

