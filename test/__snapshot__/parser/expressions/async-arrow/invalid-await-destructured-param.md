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
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 15,
                "end": 18
            },
            "typeParameters": null,
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
                                "start": 8,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 8,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 14
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
                "start": 18,
                "end": 20
            },
            "flags": 290,
            "start": 0,
            "end": 20
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 20,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "async ({await}) => 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

async ({
  await
}) =>  1

```

### Diagnostics

```javascript
✔ No errors
```

