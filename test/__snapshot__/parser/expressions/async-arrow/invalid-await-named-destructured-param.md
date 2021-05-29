# Kataw parser test case

## Input

`````js
async ({a: await}) => 1;
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
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 18,
                "end": 21
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 9
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 16
                                },
                                "flags": 32,
                                "start": 8,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 8,
                        "end": 16
                    },
                    "flags": 48,
                    "start": 7,
                    "end": 17
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 21,
                "end": 23
            },
            "flags": 290,
            "start": 0,
            "end": 23
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 23,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "async ({a: await}) => 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

async ({ a: await }) =>  1

```

### Diagnostics

```javascript
✔ No errors
```

