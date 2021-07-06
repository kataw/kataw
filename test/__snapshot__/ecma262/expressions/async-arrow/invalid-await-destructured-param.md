# Kataw parser test case

## Input

`````js
async ({await}) => 1;
`````

## Options

### Parser Options

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
            "kind": 271,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "typeParameters": null,
            "arrowPatameterList": {
                "kind": 342,
                "parameters": [
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 13
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 13
                        },
                        "flags": 48,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 14
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 7,
                "end": 15
            },
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "transformFlags": 0,
                "start": 15,
                "end": 18
            },
            "contents": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "transformFlags": 0,
                "start": 18,
                "end": 20
            },
            "flags": 290,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 20,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "async ({await}) => 1;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

async ({ await }) => 1
```

### Diagnostics

```javascript
✔ No errors
```

